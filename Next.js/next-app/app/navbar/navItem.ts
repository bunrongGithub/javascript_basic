type difinitionTypes = {
    name?:string;
    href?:string | any;
    class?:string
}
export const navbars:difinitionTypes[] = [
    {
        name: "Product",
        href: "/product",
        class: "text-sm font-semibold leading-6 text-white"
    },
    {
        name: "Features",
        href: "/features",
        class: "text-sm font-semibold leading-6 text-white"
    },
    {
        name: "Marketplace",
        href: "/marketplace",
        class: "text-sm font-semibold leading-6 text-white"
    },
    {
        name: "Company",
        href: "/company",
        class: "text-sm font-semibold leading-6 text-white"
    }
];