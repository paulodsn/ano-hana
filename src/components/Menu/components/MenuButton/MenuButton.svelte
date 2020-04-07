<script>
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function dispatchClick() {
        dispatch('click')
    }
</script>

<button
    class="flex items-center px-3 py-2 rounded bg-primary text-gray-100"
    on:click="{ dispatchClick }"
>
    <svg class="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
    </svg>
</button>