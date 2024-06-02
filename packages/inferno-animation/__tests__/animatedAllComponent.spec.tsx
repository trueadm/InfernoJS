import { type InfernoNode, render } from 'inferno';
import { renderToString } from 'inferno-server';
import {
  AnimatedAllComponent,
  componentDidAppear,
  componentWillDisappear,
  componentWillMove,
} from 'inferno-animation';

describe('inferno-animation AnimatedAllComponent', () => {
  let container;

  beforeEach(function () {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  function waitForAnimationAndContinue(condition, callback, arg1?: any): void {
    if (container.textContent !== condition) {
      setTimeout(
        waitForAnimationAndContinue.bind(null, condition, callback, arg1),
        10,
      );
      return;
    }

    callback(arg1);
  }

  function afterEachClear(done): void {
    container.innerHTML = '';
    document.body.removeChild(container);
    done();
  }

  afterEach(function (done) {
    render(null, container);
    waitForAnimationAndContinue('', afterEachClear, done);
  });

  it('should render class component extending AnimatedAllComponent into DOM', () => {
    class MyComponent extends AnimatedAllComponent<any, any> {
      public render({ children }): InfernoNode {
        return <div>{children}</div>;
      }
    }

    render(<MyComponent>1</MyComponent>, container);
    expect(container.textContent).toBe('1');
  });

  it('should remove class component extending AnimatedAllComponent from DOM', (done) => {
    class My extends AnimatedAllComponent<any, any> {
      public render({ children }): InfernoNode {
        return <div>{children}</div>;
      }
    }

    render(
      <div>
        <My key="#1">1</My>
        <My key="#2">2</My>
        <My key="#3">3</My>
      </div>,
      container,
    );
    expect(container.textContent).toBe('123');

    render(
      <div>
        <My key="#1">1</My>
        <My key="#3">3</My>
      </div>,
      container,
    );

    /**
     * The reason for recursively calling checkRenderComplete_XXX instead of
     * using a simpler setTimeout is due to a couple of async calls during the animations
     * hooks of AnimatedAllComponent. These can cause a setTimeout in the test to
     * trigger prior to the animation callbacks and thus remove operations haven't yet
     * been completed. As long as the render operation eventually completes correctly,
     * the test should be considered successful.
     */

    waitForAnimationAndContinue('13', function () {
      render(
        <div>
          <My key="#1">1</My>
          <My key="#4">4</My>
        </div>,
        container,
      );

      waitForAnimationAndContinue('14', function () {
        done();
      });
    });
  });

  it('should move class component extending AnimatedAllComponent from DOM', (done) => {
    class My extends AnimatedAllComponent<any, any> {
      public render({ children }): InfernoNode {
        return <div>{children}</div>;
      }
    }

    render(
      <div>
        <My key="#1">1</My>
        <My key="#2">2</My>
        <My key="#3">3</My>
      </div>,
      container,
    );
    expect(container.textContent).toBe('123');

    render(
      <div>
        <My key="#1">1</My>
        <My key="#3">3</My>
        <My key="#2">2</My>
      </div>,
      container,
    );

    /**
     * The reason for recursively calling checkRenderComplete_XXX instead of
     * using a simpler setTimeout is due to a couple of async calls during the animations
     * hooks of AnimatedAllComponent. These can cause a setTimeout in the test to
     * trigger prior to the animation callbacks and thus remove operations haven't yet
     * been completed. As long as the render operation eventually completes correctly,
     * the test should be considered successful.
     */
    // Disappear animations complete async

    waitForAnimationAndContinue('132', function () {
      render(
        <div>
          <My key="#4">4</My>
          <My key="#1">1</My>
        </div>,
        container,
      );

      waitForAnimationAndContinue('41', function () {
        render(null, container);
        done();
      });
    });
  });

  it('should render class component extending AnimatedAllComponent to a string', async () => {
    class MyComponent extends AnimatedAllComponent<any, any> {
      public render({ children }): InfernoNode {
        return <div>{children}</div>;
      }
    }

    const outputStr = await renderToString(<MyComponent>1</MyComponent>);
    expect(outputStr).toBe('<div>1</div>');
  });
});

describe('inferno-animation animated functional component', () => {
  let container;

  beforeEach(function () {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  function waitForAnimationAndContinue(condition, callback, arg1?): void {
    if (container.textContent !== condition) {
      setTimeout(
        waitForAnimationAndContinue.bind(null, condition, callback, arg1),
        10,
      );
      return;
    }

    callback(arg1);
  }

  function afterEachClear(done): void {
    container.innerHTML = '';
    document.body.removeChild(container);
    done();
  }

  afterEach(function (done) {
    render(null, container);
    waitForAnimationAndContinue('', afterEachClear, done);
  });

  it('should render functional component extending AnimatedAllComponent into DOM', () => {
    const MyComponent = ({ children }): InfernoNode => {
      return <div>{children}</div>;
    };

    render(
      <MyComponent
        onComponentDidAppear={componentDidAppear}
        onComponentWillDisappear={componentWillDisappear}
        onComponentWillMove={componentWillMove}
      >
        1
      </MyComponent>,
      container,
    );
    expect(container.textContent).toBe('1');
  });

  it('should remove functional component extending AnimatedAllComponent from DOM', (done) => {
    const My = ({ children }): InfernoNode => {
      return <div>{children}</div>;
    };

    const anim = {
      onComponentDidAppear: componentDidAppear,
      onComponentWillDisappear: componentWillDisappear,
      onComponentWillMove: componentWillMove,
    };

    render(
      <div>
        <My key="#1" {...anim}>
          1
        </My>
        <My key="#2" {...anim}>
          2
        </My>
        <My key="#3" {...anim}>
          3
        </My>
      </div>,
      container,
    );
    expect(container.textContent).toBe('123');

    render(
      <div>
        <My key="#1" {...anim}>
          1
        </My>
        <My key="#3" {...anim}>
          3
        </My>
      </div>,
      container,
    );

    /**
     * The reason for recursively calling checkRenderComplete_XXX instead of
     * using a simpler setTimeout is due to a couple of async calls during the animations
     * hooks of AnimatedAllComponent. These can cause a setTimeout in the test to
     * trigger prior to the animation callbacks and thus remove operations haven't yet
     * been completed. As long as the render operation eventually completes correctly,
     * the test should be considered successful.
     */

    waitForAnimationAndContinue('13', function () {
      render(
        <div>
          <My key="#1" {...anim}>
            1
          </My>
          <My key="#4" {...anim}>
            4
          </My>
        </div>,
        container,
      );

      waitForAnimationAndContinue('14', function () {
        done();
      });
    });
  });

  it('should move functional component extending AnimatedAllComponent from DOM', (done) => {
    const My = ({ children }): InfernoNode => {
      return <div>{children}</div>;
    };

    const anim = {
      onComponentDidAppear: componentDidAppear,
      onComponentWillDisappear: componentWillDisappear,
      onComponentWillMove: componentWillMove,
    };

    render(
      <div>
        <My key="#1" {...anim}>
          1
        </My>
        <My key="#2" {...anim}>
          2
        </My>
        <My key="#3" {...anim}>
          3
        </My>
      </div>,
      container,
    );
    expect(container.textContent).toBe('123');

    render(
      <div>
        <My key="#1" {...anim}>
          1
        </My>
        <My key="#3" {...anim}>
          3
        </My>
        <My key="#2" {...anim}>
          2
        </My>
      </div>,
      container,
    );

    /**
     * The reason for recursively calling checkRenderComplete_XXX instead of
     * using a simpler setTimeout is due to a couple of async calls during the animations
     * hooks of AnimatedAllComponent. These can cause a setTimeout in the test to
     * trigger prior to the animation callbacks and thus remove operations haven't yet
     * been completed. As long as the render operation eventually completes correctly,
     * the test should be considered successful.
     */
    // Disappear animations complete async

    waitForAnimationAndContinue('132', function () {
      render(
        <div>
          <My key="#4" {...anim}>
            4
          </My>
          <My key="#1" {...anim}>
            1
          </My>
        </div>,
        container,
      );

      waitForAnimationAndContinue('41', function () {
        render(null, container);
        done();
      });
    });
  });

  it('should render class component extending AnimatedAllComponent to a string', async () => {
    const MyComponent = ({ children }): InfernoNode => {
      return <div>{children}</div>;
    };

    const anim = {
      onComponentDidAppear: componentDidAppear,
      onComponentWillDisappear: componentWillDisappear,
      onComponentWillMove: componentWillMove,
    };

    const outputStr = await renderToString(<MyComponent {...anim}>1</MyComponent>);
    expect(outputStr).toBe('<div>1</div>');
  });
});
