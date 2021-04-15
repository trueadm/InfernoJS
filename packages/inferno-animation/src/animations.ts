import { addClassName, clearDimensions, getDimensions, registerTransitionListener, removeClassName, setDimensions, setDisplay } from './utils';
import { queueAnimation, AnimationPhase } from './animationCoordinator';
import { isNullOrUndef } from 'inferno-shared';

export type AnimationClass = {
  active: string;
  end: string;
  start: string;
};

function getAnimationClass(animationProp: AnimationClass | string | undefined | null, prefix: string): AnimationClass {
  let animCls: AnimationClass;

  if (!isNullOrUndef(animationProp) && typeof animationProp === 'object') {
    animCls = animationProp;
  } else {
    const animationName = animationProp || 'inferno-animation';
    animCls = {
      active: `${animationName}${prefix}-active`,
      end: `${animationName}${prefix}-end`,
      start: `${animationName}${prefix}`
    };
  }

  return animCls;
}

export function componentDidAppear(dom: HTMLElement, props) {
  // Get dimensions and unpack class names
  const cls = getAnimationClass(props.animation, '-enter');
  const dimensions = getDimensions(dom);
  const display = setDisplay(dom, 'none');

  queueAnimation((phase) => _didAppear(phase, dom, cls, dimensions, display));
}

function _didAppear (phase: AnimationPhase, dom: HTMLElement, cls: AnimationClass, dimensions, display: string) {
  switch (phase) {
    case AnimationPhase.INITIALIZE:
      // 1. Set start of animation
      setDisplay(dom, display); // Needed because we set display: none whilst waiting for animation frame
      addClassName(dom, cls.start);
      return;
    case AnimationPhase.ACTIVATE_TRANSITIONS:
      // 2. Activate transition
      addClassName(dom, cls.active);
      return;
    case AnimationPhase.REGISTER_LISTENERS:
      // 3. Set an animation listener, code at end
      // Needs to be done after activating so timeout is calculated correctly
      registerTransitionListener(
        [dom],
        function () {
          // *** Cleanup ***
          // 5. Remove the element
          clearDimensions(dom);
          removeClassName(dom, cls.active);
          removeClassName(dom, cls.end);

          // 6. Call callback to allow stuff to happen
          // Not currently used but this is where one could
          // add a call to something like this.didAppearDone
        }
      );
    case AnimationPhase.ACTIVATE_ANIMATION:
      // 4. Activate target state
      setDimensions(dom, dimensions.width, dimensions.height);
      removeClassName(dom, cls.start);
      addClassName(dom, cls.end);
      return;
  }
}

export function componentWillDisappear(dom: HTMLElement, props, callback: Function) {
  // Get dimensions and unpack class names
  const cls = getAnimationClass(props.animation, '-leave');
  const dimensions = getDimensions(dom);
  queueAnimation((phase) => _willDisappear(phase, dom, callback, cls, dimensions));
}

function _willDisappear (phase: AnimationPhase, dom: HTMLElement, callback: Function, cls: AnimationClass, dimensions) {
  switch (phase) {
    case AnimationPhase.INITIALIZE:
      // 1. Get dimensions and set animation start state
      setDimensions(dom, dimensions.width, dimensions.height);
      addClassName(dom, cls.start);
      return;
    case AnimationPhase.ACTIVATE_TRANSITIONS:
      // 2. Activate transition
      addClassName(dom, cls.active);
      return;
    case AnimationPhase.REGISTER_LISTENERS:
      // 3. Set an animation listener, code at end
      // Needs to be done after activating so timeout is calculated correctly
      registerTransitionListener(
        [dom],
        function () {
          // *** Cleanup not needed since node is removed ***
          callback();
        }
      );
    case AnimationPhase.ACTIVATE_ANIMATION:
      // 4. Activate target state
      addClassName(dom, cls.end);
      removeClassName(dom, cls.start);
      clearDimensions(dom);
  }
}