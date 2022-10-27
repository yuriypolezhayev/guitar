<template>
  <aside>
    <ItemsSelector v-if="showSelector" v-model="itemType" />

    <appAccordion title="Show">
      <AppList type="radio" :options="showOptions" v-model="show" />
    </appAccordion>

    <appAccordion title="Color" full>
      <div class="content-container">
        <appTitle size="xl" weight="bold" class="pb-20">
          Ready color designs
        </appTitle>

        <AppList type="radio" :options="colorsOptions" v-model="readyOption" />
      </div>

      <hr />

      <div class="content-container">
        <appTitle size="xl" weight="bold" class="pb-20">
          Custom color
        </appTitle>
      </div>
    </appAccordion>

    <appAccordion title="Pickguard" full>
      <div class="content-container">
        <appTitle size="xl" weight="bold" class="pb-20">
          Type of pickguard
        </appTitle>

        <AppList type="radio" :options="pickGuardTypeOptions" v-model="pickGuardType" />
      </div>

      <hr />

      <div class="content-container">
        <appTitle size="xl" weight="bold" class="pb-20">
          Pickguard design

          <appTitle
              tag="span"
              size="xs"
              color="primary"
              class="pl-15"
          >
            + $10
          </appTitle>
        </appTitle>

        <AppList
            v-model="pickGuardDesign"
            type="check"
            :options="pickGuardDesignOptions"
        />

        <appClose
            label="Clear all"
            @click="pickGuardDesign = []"
            class="pt-10"
        />
      </div>
    </appAccordion>
  </aside>
</template>

<script>
import AppTitle from '@/components/atoms/typography/AppTitle.vue';
import AppAccordion from '@/components/atoms/accordion/AppAccordion.vue';
import AppList from '@/components/molecules/lists/AppList.vue';
import appClose from '@/components/atoms/common/Close.vue'
import ItemsSelector from '@/modules/aside/components/ItemsSelector.vue';

export default {
  name: 'Aside',

  components: {
    AppTitle,
    AppAccordion,
    AppList,
    appClose,
    ItemsSelector,
  },

  data: () => ({
    showSelector: true,
    itemType: 'hat',
    show: '',
    pickGuardType: '',
    pickGuardDesign: [],
    readyOption: '',
    showOptions: [
      { id: 1, label: 'Only Guitar' },
      { id: 2, label: 'With stand' },
      { id: 3, label: 'In a case' },
    ],
    colorsOptions: [
      { id: 1, label: '3-Color Sunburst', customBG: 'sunburst' }, // customBg can be url
      { id: 2, label: 'Roasted Pine', customBG: 'pine' },
      { id: 3, label: 'Mystic Surf Green', customBG: 'green' },
      { id: 4, label: 'Bran Paisley Esquire', customBG: 'esquire' },
    ],
    pickGuardTypeOptions: [
      { id: 1, label: 'Type 1' },
      { id: 2, label: 'Type 2' },
      { id: 3, label: 'Type 3' },
    ],
    pickGuardDesignOptions: [
      { id: 1, label: 'Type 1' },
      { id: 2, label: 'Type 2' },
      { id: 3, label: 'Type 3' },
      { id: 4, label: 'Type 4' },
      { id: 5, label: 'Type 5' },
      { id: 6, label: 'Type 6' },
    ]
  }),
}
</script>

<style lang="scss" scoped>
aside {
  position: relative;
  overflow-y: scroll;
  width: 100%;
  max-width: 480px;
  background-color: #111111;

  @media (max-width: 992px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: none;
  }
}
</style>
