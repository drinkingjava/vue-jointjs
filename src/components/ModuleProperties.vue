<template>
  <div ref="properties">
    <h1>Hello I am the properties panel</h1>
  </div>
</template>

<script>
export default {
	name: 'ModuleProperties',

	props: {},

	created() {
		// this.name = this.$options.name
		// console.log(`[${this.name}] Created`)
		// this.graph = new this.$joint.dia.Graph(
		// 	{},
		// 	{ cellNamespace: this.$joint.shapes }
		// )
	},

	mounted() {
		// console.log(`[${this.name}] Mounted:`, this.$refs.joint)
		// new this.$joint.dia.Paper({
		// 	el: this.$refs.joint,
		// 	cellViewNamespace: this.$joint.shapes,
		// 	model: this.graph,
		// 	width: this.width,
		// 	height: this.height,
		// 	gridSize: this.gridSize,
		// 	drawGrid: this.drawGrid,
		// 	background: this.background,
		// 	interactive: !this.readonly
		// })
		// this.$emit('init', this.graph)
	}
};
</script>

<style scoped></style>
