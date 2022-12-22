import { Component, InfernoNode } from 'inferno';
import { warning } from './utils';
import { combineFrom } from 'inferno-shared';
import type { History, Location } from 'history';
import { Match } from './Route';

export type TLoaderProps<P extends Record<string, string>> = {
  params?: P; // Match params (if any)
  request: Request; // Fetch API Request
  onProgress?(perc: number): void;
}

/**
 * Loader returns Response and throws error
 */
export type TLoader<P extends Record<string, string>, R extends Response> = ({params, request}: TLoaderProps<P>) => Promise<R>;

export type TLoaderData = {
  res?: Response;
  err?: any;
}

type TInitialData = Record<string, TLoaderData>; // key is route path to allow resolving

export interface IRouterProps {
  history: History;
  children: InfernoNode;
  initialData?: TInitialData;
}

export type TContextRouter = {
  history: History;
  route: {
    location: Pick<Location, 'pathname'>, // This was Partial<Location> before but this makes pathname optional causing false type error in code
    match: Match<any> | null;
  }
  initialData?: TInitialData;
  staticContext?: object; // TODO: This should be properly typed
}

export type RouterContext = { router: TContextRouter };

/**
 * The public API for putting history on context.
 */
export class Router extends Component<IRouterProps, any> {
  public unlisten;

  constructor(props: IRouterProps, context: { router: TContextRouter }) {
    super(props, context);
    const match = this.computeMatch(props.history.location.pathname);
    this.state = {
      match,
    };
  }

  public getChildContext(): RouterContext {
    const parentRouter: TContextRouter = this.context.router;
    const router: TContextRouter = combineFrom(parentRouter, null);
    router.history = this.props.history;
    router.route = {
      location: router.history.location,
      match: this.state?.match, // Why are we sending this? it appears useless.
    };
    router.initialData = this.props.initialData; // this is a dictionary of all data available
    return {
      router
    };
  }


  public computeMatch(pathname): Match<{}> {
    return {
      isExact: pathname === '/',
      params: {},
      path: '/',
      url: '/',
      loader:  undefined,
    };
  }

  public componentWillMount() {
    const { history } = this.props;

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(() => {
      this.setState({
        match: this.computeMatch(history.location.pathname)
      });
    });
  }

  public componentWillUnmount() {
    this.unlisten();
  }

  public render(props: IRouterProps) {
    return props.children;
  }
}

if (process.env.NODE_ENV !== 'production') {
  Router.prototype.componentWillReceiveProps = function (nextProps) {
    warning(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };
}
