<script>
    import { createEventDispatcher } from 'svelte';
    export let href;

    const dispatch = createEventDispatcher();

    function dispatchClick() {
        dispatch('click')
    }

</script>
<a
    href="{ href }"
    on:click="{ dispatchClick }"
    class="block py-2 border border-white z-10 rounded bg-primary hover:text-black sm:inline-block sm:text-xl sm:px-4 sm:mx-1"
>
    <slot />
</a>