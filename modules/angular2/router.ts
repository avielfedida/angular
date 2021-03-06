/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */


export {Router, RootRouter} from './src/router/router';
export {RouterOutlet} from './src/router/router_outlet';
export {RouterLink} from './src/router/router_link';
export {RouteParams} from './src/router/instruction';
export {RouteRegistry} from './src/router/route_registry';
export {LocationStrategy} from './src/router/location_strategy';
export {HashLocationStrategy} from './src/router/hash_location_strategy';
export {HTML5LocationStrategy} from './src/router/html5_location_strategy';
export {Location, APP_BASE_HREF} from './src/router/location';
export {Pipeline} from './src/router/pipeline';
export * from './src/router/route_config_decorator';
export * from './src/router/route_definition';
export {OnActivate, OnDeactivate, OnReuse, CanDeactivate, CanReuse} from './src/router/interfaces';
export {CanActivate} from './src/router/lifecycle_annotations';
export {Instruction, ComponentInstruction} from './src/router/instruction';
export {Url} from './src/router/url_parser';
export {OpaqueToken, Type} from 'angular2/angular2';
export {ROUTE_DATA} from './src/router/route_data';

import {LocationStrategy} from './src/router/location_strategy';
import {HTML5LocationStrategy} from './src/router/html5_location_strategy';
import {Router, RootRouter} from './src/router/router';
import {RouterOutlet} from './src/router/router_outlet';
import {RouterLink} from './src/router/router_link';
import {RouteRegistry} from './src/router/route_registry';
import {Pipeline} from './src/router/pipeline';
import {Location} from './src/router/location';
import {APP_COMPONENT} from './src/core/application_tokens';
import {Binding} from './di';
import {CONST_EXPR} from './src/facade/lang';
import {List} from './src/facade/collection';

export const ROUTER_DIRECTIVES: List<any> = CONST_EXPR([RouterOutlet, RouterLink]);

export const ROUTER_BINDINGS: List<any> = CONST_EXPR([
  RouteRegistry,
  Pipeline,
  CONST_EXPR(new Binding(LocationStrategy, {toClass: HTML5LocationStrategy})),
  Location,
  CONST_EXPR(
      new Binding(Router,
                  {
                    toFactory: routerFactory,
                    deps: CONST_EXPR([RouteRegistry, Pipeline, Location, APP_COMPONENT])
                  }))
]);

function routerFactory(registry, pipeline, location, appRoot) {
  return new RootRouter(registry, pipeline, location, appRoot);
}
