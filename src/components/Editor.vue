<template>
  <div contenteditable @input="onInput" class="editor">
    {{ content }}
  </div>
</template>

<script>
export default {
  data() {
    return { content: "" };
  },
  methods: {
    onInput(e) {
      console.log(e.target.innerText);
    },
  },
};
</script>
