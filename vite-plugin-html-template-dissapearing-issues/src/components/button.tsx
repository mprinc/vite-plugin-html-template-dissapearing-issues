import { Slot } from 'vue';
import { defineComponent } from 'vue';
import { VBtn } from 'vuetify/components';

export interface IButton {
	secondary: boolean;
};

export default defineComponent({
	props: ["info"],
	// https://stackoverflow.com/a/64115658
	components: {
        VBtn
    },
	render() {
	// return <v-btn color="secondary">Secondary: { slots.default?.() }</v-btn>
	return <v-btn color={this.info?.secondary ? "secondary" : undefined}>Secondary, slots: { this.$slots?.default?.() }</v-btn>
    // use an array to return multiple root nodes
    // return props.info?.secondary
	// 	? <v-btn color="secondary">Secondary: { slots.bar?.() }</v-btn>
	// 	: <v-btn>Primary: <slot></slot></v-btn>
  }
})
