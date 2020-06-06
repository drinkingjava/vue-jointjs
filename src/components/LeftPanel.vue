<template>
  <div ref="leftpanel">
    <ul class="flex">
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
      </li>
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
      </li>
      <li class="mr-6">
        <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
      </li>
    </ul>
    <h1>Menu</h1>
    <p>Project</p>
    <label for="project">Name</label>
    <input id="project" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" value="Current Project">
    <label for="description">Description</label>
    <input id="description" type="text" value="Current Project Description">
    <ul>
      Modules Available
      <li>Packet Generator</li>
    </ul>
    <button class="p-3 border">
      Save
    </button>
  </div>
</template>

<script>
export default {
	name: 'LeftPanel',

	props: {},

	created () {
		// this.name = this.$options.name
		// console.log(`[${this.name}] Created`)
		// this.graph = new this.$joint.dia.Graph(
		// 	{},
		// 	{ cellNamespace: this.$joint.shapes }
		// )
	},

	mounted () {
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
}
</script>

<style scoped></style>
