import { Slot, Component } from 'vue';
import { VBtn } from 'vuetify/components';

const vBtn = VBtn as Component;
export interface IButton {
	secondary: boolean;
};

type TSlotNames = 'default';
type TDialogSlots = Readonly<Record<TSlotNames, Slot | undefined>>;

export default (props: { info: IButton}, {slots}: {slots: TDialogSlots}) => {
	return <vBtn color={props.info?.secondary ? "secondary" : undefined}>Functional: { slots?.default?.() }</vBtn>
}
