<script setup lang="ts">
import { computed } from 'vue';

const boardDimensions: number[] = [8, 8];

const ROWS = computed((): number[] => {
    let rows = Array();

    for (let index = boardDimensions[0]; index > 0; index--) {
        rows.push(index);
    }
    return rows;
});

const COLUMNS = computed((): string[] => {
    const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let columns = Array();

    for (let index = 0; index < boardDimensions[1]; index++) {
        columns.push(ALPHABET[index]);
    }
    return columns;
});
</script>

<template>
    <section>
        <table>
            <thead>
                <tr>
                    <th>
                        <font-awesome-icon
                            icon="fa-solid fa-border-top-left"
                            class="fa-2xl"
                        />
                    </th>
                    <th
                        v-for="boardColumn in COLUMNS"
                        :key="boardColumn"
                    >
                        <font-awesome-icon
                            :icon="'fa-solid fa-' + boardColumn.toLowerCase()"
                            class="fa-2xl"
                        />
                    </th>
                    <th>
                        <font-awesome-icon
                            icon="fa-solid fa-border-top-left"
                            class="fa-rotate-90 fa-2xl"
                        />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="boardRow in ROWS"
                    :key="boardRow"
                >
                    <th>
                        <font-awesome-icon
                            :icon="'fa-solid fa-' + boardRow"
                            class="fa-2xl"
                        />
                    </th>

                    <td
                        v-for="(boardColumn, indexCol) in COLUMNS"
                        :key="boardColumn"
                    >
                        {{ boardRow - 1 + ' - ' + indexCol }}
                    </td>

                    <th>
                        <font-awesome-icon
                            :icon="'fa-solid fa-' + boardRow"
                            class="fa-2xl"
                        />
                    </th>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <th>
                        <font-awesome-icon
                            icon="fa-solid fa-border-top-left"
                            class="fa-rotate-270 fa-2xl"
                        />
                    </th>
                    <th
                        v-for="boardColumn in COLUMNS"
                        :key="boardColumn"
                    >
                        <font-awesome-icon
                            :icon="'fa-solid fa-' + boardColumn.toLowerCase()"
                            class="fa-2xl"
                        />
                    </th>
                    <th>
                        <font-awesome-icon
                            icon="fa-solid fa-border-top-left"
                            class="fa-rotate-180 fa-2xl"
                        />
                    </th>
                </tr>
            </tfoot>
        </table>
    </section>
</template>

<style>
table {
    border-collapse: collapse;
    height: 100vh;
}

th {
    width: 6rem;
    height: 6rem;
    font-weight: bolder;
}

td {
    text-align: center;
    width: 6rem;
    height: 6rem;
    padding: 0;
}
</style>
