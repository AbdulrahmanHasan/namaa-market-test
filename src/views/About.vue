<template>
  <div class="about">
    <h1>This is an about page {{ $t('message') }} </h1>
  </div>
</template>


<script>
export default {
  data() {
    return {

    }
  },
   metaInfo() {
        return {
            title: 'about',
            meta:[
                {
                name: 'desc1',
                content: 'this is about1',
                },
                {
                name: 'desc2',
                content: 'this is about2',
                },
                {
                name: 'desc3',
                content: 'this is about3',
                },
            ]
        }
    },
}
</script>