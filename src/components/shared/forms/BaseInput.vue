<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps<{
    type: string;
    value: any;
    placeholder: string;
    label: string;
    required: boolean;
    minlength: number;
    maxlength: number;
}>();

const emit = defineEmits(['changeValue']);

const newValue = (event: any) => {
    console.log('[BaseInput] [newValue()] value: ', event);
    if (event.target !== null) {
        emit('changeValue', event.target.value);
    }
};

const randomId = computed(() => {
    return Math.floor(Math.random() * 1001);
});

const elementId = computed(() => {
    return 'input-' + randomId.value;
});
</script>

<template>
    <div>
        <label :for="elementId">
            {{ props.label }}
        </label>
        <input
            class="text--center"
            :id="elementId"
            type="baseInput.type"
            :value="props.value"
            :placeholder="props.placeholder"
            :required="props.required"
            :minlength="props.minlength"
            :maxlength="props.maxlength"
            @keyup="newValue($event)"
        />
    </div>
</template>

<style scoped>
div {
    margin: 1rem;
}

input {
    border-radius: 1rem;
    padding: 1rem;
    background-color: transparent;
    border: 1.5px solid var(--color-text);
    color: var(--color-text);
}

label {
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    z-index: 1;
    padding: 0.5rem;
    background-color: var(--color-background);
    font-weight: bolder;
    font-size: 1rem;
}

div:hover > label {
    color: var(--text-hover);
}

input:hover {
    border: 1.5px solid var(--text-hover);
    color: var(--text-hover);
}

input:hover::placeholder {
    color: var(--text-hover);
}

input:focus {
    outline: 1.5px solid var(--text-hover);
    border: 1.5px solid var(--text-hover);
    color: var(--text-hover);
}

div:has(input:focus) > label {
    color: var(--text-hover);
}
</style>
