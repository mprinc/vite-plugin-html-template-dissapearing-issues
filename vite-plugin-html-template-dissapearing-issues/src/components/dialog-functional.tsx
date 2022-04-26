import { Slot, Component } from 'vue';
// import { Slot, Slots } from 'vue';

// Produces: `runtime-core.esm-bundler.js:38 [Vue warn]: Failed to resolve component: csfButton`
// import csfButton from "./button-functional";
// import csfButton from "./button-functional.jsx";

// A way to avoid the error: `runtime-core.esm-bundler.js:38 [Vue warn]: Failed to resolve component: csfButton`
import _csfButton from "./button-functional";
const csfButton = _csfButton as unknown as Component;
export interface IDialog {
	/** dialog background color, use regular CSS colors (#RGB or names) */
	background: string;
	alignRight: boolean;
};

type TSlotNames = 'default' | 'header' | 'footer';
type TDialogSlots = Readonly<Record<TSlotNames, Slot | undefined>>;
// https://stackoverflow.com/questions/71942358/how-to-register-functional-component
// export default (props: { info: IDialog}, {slots}: {slots: Slots}) => {
export default (props: { info: IDialog}, {slots}: {slots: TDialogSlots}) => {
	return <div>
		{/* header */}
		<h1>Дијалог: {slots?.header?.()} </h1>


		{/* body */}
		<div style={{
			"background-color" : props.info?.background ?? undefined,
			"text-align": props.info?.alignRight ? "right" : undefined,
		}}>
			<div>Садржај:</div>
			{ slots?.default?.() }
			<div>
				info: { JSON.stringify(props.info)}
			</div>
		</div>

		<hr/>

		{/* footer */}
		<div>
			Подножје: {slots?.footer?.()}
		</div>
		<csfButton>OK</csfButton>
	</div>
}
