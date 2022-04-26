import { defineComponent } from 'vue';
import { VBtn } from 'vuetify/components';

export interface IDialog {
	background: string;
	alignRight: boolean;
};

export default defineComponent({
	props: ["info"],
	// https://stackoverflow.com/a/64115658
	components: {
        VBtn
    },
	// {info}: {info: IDialog}
  render() {
	// return <v-btn color="secondary">Secondary: { slots.default?.() }</v-btn>
	return <div>
			<h1>Дијалог: {this.$slots?.header?.()} </h1>
			<div style={{
				"background-color" : this.info?.background ?? undefined,
				"text-align": this.info?.alignRight ? "right" : undefined,
			}}>
				<div>Садржај:</div>
			{ this.$slots?.default?.() }
			<div>
			info: { JSON.stringify(this.info)}
			</div>
			</div>
			<hr/>
			<div>
				Подножје: {this.$slots?.footer?.()}
				<VBtn>OK</VBtn>
			</div>
		</div>
    // use an array to return multiple root nodes
    // return props.info?.secondary
	// 	? <v-btn color="secondary">Secondary: { slots.bar?.() }</v-btn>
	// 	: <v-btn>Primary: <slot></slot></v-btn>
  }
})
