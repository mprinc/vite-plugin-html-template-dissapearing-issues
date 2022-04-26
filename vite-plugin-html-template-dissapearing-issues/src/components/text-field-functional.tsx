import { Slot, Component } from 'vue';
import { VTextField } from 'vuetify/components';

// const vTextField = VTextField as Component;
export enum ETextFieldVariant {
	CONTAINED = "contained",
	FILLED = "filled",
	OUTLINED = "outlined",
	PLAIN = "plain",
	UNDERLINED = "underlined"
};

export interface ITextField {
	label: string;
	hint: string;
	variant: ETextFieldVariant;
};

type TSlotNames = 'default';
type TDialogSlots = Readonly<Record<TSlotNames, Slot | undefined>>;

export default (props: { info: ITextField, modelValue: string}, {slots, emit, attrs}: {slots: TDialogSlots, emit: any, attrs: any}) => {
	const obj = {
		valueInner: undefined,
		// _value: props.modelValue,
	};

	// window.alert(`value: ${props.modelValue}`);
	// https://www.w3schools.com/js/js_object_accessors.asp
	Object.defineProperty(obj, "valueInner", {
		// https://vuejs.org/guide/extras/render-function.html#v-model
		get : () => props.modelValue,
		// set : (value) => {emit("input", value);}
		set : (value) => {emit("update:modelValue", value);}
	  });

	return <VTextField v-model={obj.valueInner}
	  label={props.info?.label} hint={props.info?.hint} variant={props.info?.variant}
	/>
}
