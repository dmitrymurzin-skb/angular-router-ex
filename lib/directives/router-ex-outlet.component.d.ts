import { ComponentFactoryResolver, ComponentRef, EventEmitter, Injector, OnDestroy, Type, ViewContainerRef } from "@angular/core";
import { IOutletActivationResult, IRouterOutlet, RouterOutletMap } from "../RouterOutletMap";
import { ResolvedRoute } from "../Config";
import { RouteReuseCache } from "../RouteReuseCache";
import { RouterScrollWrapper } from "../RouterScrollWrapper";
export declare class RouterExOutletComponent implements OnDestroy, IRouterOutlet {
    private parentOutletMap;
    private location;
    private reuseCache;
    private scrollWrapper;
    private name;
    autoScroll: boolean;
    prerenderFallback: number;
    activateEvents: EventEmitter<any>;
    deactivateEvents: EventEmitter<any>;
    prerenderReadyEvents: EventEmitter<any>;
    prerenderContainer: ViewContainerRef;
    private activated;
    private routeCtx;
    constructor(parentOutletMap: RouterOutletMap, location: ViewContainerRef, reuseCache: RouteReuseCache, scrollWrapper: RouterScrollWrapper, name: string);
    readonly isActivated: boolean;
    readonly activatedComponent: ComponentRef<any>;
    activate(route: ResolvedRoute, url: string, componentType: Type<any>, resolver: ComponentFactoryResolver, injector: Injector, force?: boolean): Promise<IOutletActivationResult>;
    ngOnDestroy(): void;
    /**
     * Replace current activated component with specified one
     */
    private activateComponent(ref, routeCtx);
    private attach(ref, routeContext);
    private deactivateCurrent();
}
