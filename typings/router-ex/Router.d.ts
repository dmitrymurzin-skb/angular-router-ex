import { Injector } from "@angular/core";
import { Location } from "@angular/common";
import { RouteMatchService } from "./RouteMatchService";
import { Observable } from "rxjs/Observable";
import { RouterOutletMap } from "./RouterOutletMap";
import { NavigationExtras, QueryParams } from "./Config";
import { NavigationEvent } from "./RouteEvents";
import { QueryStringParser } from "./QueryStringParser";
export declare class Router {
    private outletMap;
    private matchService;
    private location;
    private injector;
    private queryStringParser;
    private baseHref;
    readonly queryParams: Observable<QueryParams>;
    readonly queryParamsSnapshot: QueryParams;
    private _queryParams;
    private resolvedRoutes;
    private locationSubscription;
    private navigationId;
    private currentContext;
    private navigations;
    private navigating;
    private _events;
    constructor(outletMap: RouterOutletMap, matchService: RouteMatchService, location: Location, injector: Injector, queryStringParser: QueryStringParser, baseHref: string);
    readonly events: Observable<NavigationEvent>;
    initialNavigation(): void;
    reload(): Promise<boolean>;
    navigateByUrl(url: string, extras?: NavigationExtras): Promise<any>;
    setQuery(p: QueryParams, navigationExtras?: NavigationExtras): Promise<any>;
    updateQuery(p: QueryParams, navigationExtras?: NavigationExtras): Promise<any>;
    setUpLocationChangeListener(): void;
    private navigateInternal(url, extras);
    private executeScheduledNavigation({extras, id, url});
    private matchRoute(url, config);
    private resolveRoute(originalUrl, route);
    private processNavigations();
    private scheduleNavigation(nav);
    private resetUrlToCurrent();
    private checkGuards(newRoute);
    private checkDeactivate(currentRoute, injector);
    private static urlEquals(url1, url2);
    private static stripTrailingSlash(url);
}
