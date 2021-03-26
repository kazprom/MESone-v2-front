import { lazy } from "react";

const routes = [
    {
        back:true,
        link:true,
        exact:false,
        name:'Basic',
        path: "/basic",
        private:true,
        root:true,
        forAdmin: true,
        component: lazy(props =>
            import(
                /* webpackChunkName: "Installer_basic" */
                /* webpackMode: "lazy" */
                "../../components/Installer/Basic/Basic"
                )
        )
    },
    {
        back:true,
        link:true,
        exact:true,
        name:'Database',
        path: "/database",
        private:true,
        root:true,
        forAdmin: true,
        component: lazy(props =>
            import(
                /* webpackChunkName: "Installer_database" */
                /* webpackMode: "lazy" */
                "../../components/Installer/Database/Database"
                )
        )
    },
    {
        back:true,
        link:true,
        exact:true,
        name:'Encryption key',
        path: "/encryption-key",
        private:true,
        root:true,
        forAdmin: true,
        component: lazy(props =>
            import(
                /* webpackChunkName: "Installer_encryption-key" */
                /* webpackMode: "lazy" */
                "../../components/Installer/EncryptionKey/EncryptionKey"
                )
        )
    },
]

export default routes;
