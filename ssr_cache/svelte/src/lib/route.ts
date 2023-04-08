import store from "./store";


export function goTo(slug: string, name: string, props: any = {}) {
    store.update((current) => ({
        component: null,
        layout: [],
        props: props,
        name: name,
        key: null,
    }));

    // TODO: get slug for name ?
    window.history.pushState({}, name, slug)
}

export async function get_data_back(slug: string) {
    try {
        const response = await fetch(slug, {
            headers: {
                "X-Headless": "true"
            }
        });

        const data = await response.json();
        const name = (data?.hydrated?.__component_name || 'index').toLowerCase();

        console.log(data);

        goTo(slug, name, data)
    } catch (error) {
        console.error(error);
    }
    console.log("Swap components and router")
}