<template>
  <div id="gjs"></div>
</template>

<script>
export default {
  name: 'Admin',
  mounted() {
    const editor = this.$grapes({
      container: "#gjs",
      canvas: {
        scripts: ['https://unpkg.com/vue', 'http://localhost:3000/v-nuxt-logo.min.js'],
      }
    });

    editor.BlockManager.add('customBlock', {
      label: 'Custom Block',
      category: 'Slices',
      attributes: { class:'gjs-fonts gjs-f-b1' },
      content: `<div style="padding-top:50px; padding-bottom:50px; text-align:center">
        <v-nuxt-logo></v-nuxt-logo>
      </div>`
    });

    const script = function() {
    };

    editor.Components.addType('comp-with-js', {
      model: {
        defaults: {
          script,
          // Add some style, just to make the component visible
          style: {
            width: '100px',
            height: '100px',
            background: 'red',
          },
        }
      }
    });

    editor.Blocks.add('vue-block', {
      label: 'Vue block',
      attributes: { class: 'fa fa-text' },
      content: { type: 'comp-with-js' },
      category: 'Slices',
    });

    editor.Panels.addButton
      ('options',
        [{
          id: 'save',
          className: 'fa fa-floppy-o',
          command: 'save',
          attributes: { title: 'Save' }
        }]
      );

    // Add the command
    editor.Commands.add('save', {
      run: async () => {
        const html = await editor.getHtml();
        const css = await editor.getCss();
        await this.$axios.$put('/api/save', {
          pageId: this.$route.params.id,
          html,
          css,
        });
      }
    })
  },
}
</script>
