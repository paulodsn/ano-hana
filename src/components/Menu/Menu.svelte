<script>
    import MenuItem from './components/MenuItem/MenuItem.svelte';
    import MenuButton from './components/MenuButton/MenuButton.svelte';

    export let items;

    let showMenu = false;

    function toggleShowMenu() {
        showMenu = !showMenu;
    }

    function hideMenu() {
        showMenu = false;
    }
</script>

<div class="fixed w-full flex items-center justify-end flex-wrap p-2 sm:bg-white sm:shadow-lg">
    <div class="block sm:hidden">
        <MenuButton on:click="{ toggleShowMenu }" />
    </div>
    <div
        class="w-full flex-grow sm:block sm:flex sm:items-center"
        class:hidden="{ !showMenu }"
    >
        <div class="text-white text-center sm:flex-grow">
            {#each items as item}
             <MenuItem
                href="{ item.href }"
                on:click="{ hideMenu }"
            >
                { item.label }
            </MenuItem>
            {/each}
        </div>
    </div>
</div>