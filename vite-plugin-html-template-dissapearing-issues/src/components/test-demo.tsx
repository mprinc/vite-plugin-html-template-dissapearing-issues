import { defineComponent, Component } from 'vue';
import csfDialog, { IDialog } from "./dialog-functional";

const proba = {
	title: "Проба, аха",
};

const dlgInfo: IDialog = {
	background: '#ffaaaa',
	alignRight: true,
}

export default defineComponent({
	// https://stackoverflow.com/a/64115658
	components: {
		csfDialog: csfDialog as unknown as Component,
    },
  render() {
    // use an array to return multiple root nodes
    return <div>
		<h1>Функционални Дијалог (with "v-slots"):</h1>
		<csfDialog info={dlgInfo} v-slots={
			{
				footer: () => <div>Садржај <b>подножја</b></div>,
				header: () => `Наслов`
			}
		}>
			Ово је основни садржај са <b>анотацијом</b> гдје год треба
		</csfDialog>
		</div>
  }
})
