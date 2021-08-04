<template>
  <div id="gjs"></div>
</template>

<script>
export default {
  name: 'Admin',
  mounted() {
    const editor = this.$grapes({
      container: "#gjs"
    });
    editor.Panels.addButton
      ('options',
        [{
          id: 'save',
          className: 'fa fa-floppy-o',
          command: 'save',
          attributes: {title: 'Save'}
        }]
      );

    // Add the command
    editor.Commands.add('save', {
      run: () => {
        console.log('/api/get-page');
      }
    })
  },
}
</script>
