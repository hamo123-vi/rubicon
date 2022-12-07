import { PropsWithChildren } from "react";

export function Layout(props: PropsWithChildren) {
    return(
        <div className="layout">
            {props.children}
        </div>
    )
}