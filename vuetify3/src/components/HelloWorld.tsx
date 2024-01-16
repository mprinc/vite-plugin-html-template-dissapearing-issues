import { defineComponent, resolveComponent, Component, ref, onMounted, computed, Ref } from "vue";
import { VBtn } from 'vuetify/components';
import { VIcon } from "vuetify/components";
import { VCheckbox } from "vuetify/components";

// import { ColaboMaterial, EComponentTypes, IApp, EAppTheme, IDrawer } from "@colabo-headless/f-components-vue/src/vuetify3";

// sets the component style
import "./HelloWorld.scss";

const initialized: Ref<boolean> = ref(false);

const onMountedCb = async (): Promise<void> => {
	console.log(`[App] mounted`);
	initialized.value = true;
};

const logoUrl = "https://retracingconnections.org";
const logoImageUrl = "https://retracingconnections.org/wp-content/uploads/2021/04/LOGO-RT-new.png";

export default defineComponent({
	setup() {
		onMounted(onMountedCb);
	},
	data() {
		return {};
	},
	components: {
		// https://stackoverflow.com/questions/71942358/how-to-register-functional-component
		// strange: as it says "...when using render functions, it is unnecessary to register components..." at https://vuejs.org/guide/extras/render-function.html#components
		// maybe only for the `h` function
		// csfDialog: csfDialog as unknown as Component,
		// csfButton: csfButton as unknown as Component,
		// ColaboMaterial,
		VBtn,
		VIcon,
		VCheckbox,
	},
	render() {
		// https://stackoverflow.com/a/60990132
		return (
			<div>Hura!
				<v-btn>Button</v-btn>
				<v-icon icon="mdi-home" />
				Checkbox: <v-checkbox label="Checkbox"></v-checkbox>

				<v-btn
					color="primary"
					href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
					min-width="228"
					rel="noopener noreferrer"
					size="x-large"
					target="_blank"
					variant="flat"
				>
					<v-icon
						icon="mdi-speedometer"
						size="large"
						start
					/>

					Get Started
				</v-btn>

			</div>

		);
	},
});
