<template lang="pug">
  div
    or-header Portfolio
    or-header-nav
    div.l-container
      at-title-h2 Skill
      at-table(
        :dataList="skillList"
      )
        template(v-slot:header="slotProps")
          at-image(
            :src="slotProps.data.image_path"
            :alt="slotProps.data.title"
            :width=75
          )
        template(v-slot:data="slotProps") {{ slotProps.data.text }}
    or-footer @portfolio-205d8.firebaseapp.com
</template>

<script>
import AtTable from '@/components/atoms/list/AtTable';
import AtTitleH2 from '@/components/atoms/text/AtTitleH2';
import AtImage from '@/components/atoms/image/AtImage';
import OrFooter from '@/components/organisms/OrFooter';
import OrHeader from '@/components/organisms/OrHeader';
import OrHeaderNav from '@/components/organisms/OrHeaderNav';

export default {
  components: {
    AtTable,
    AtTitleH2,
    AtImage,
    OrFooter,
    OrHeader,
    OrHeaderNav,
  },
  props: {
    skillList: {
      type: Array,
      required: true,
    },
  },
};
</script>
