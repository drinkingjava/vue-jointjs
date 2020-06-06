<template>
  <div class="flex container p-2">
    <left-panel class="w-1/4"></left-panel>
    <joint-paper 
      class="w-2/4"
      :background="background"
      :grid-size="gridSize"
      :draw-grid="drawGrid"
      @init="setupGraph"
    />
    <module-properties class="w-1/4"></module-properties>
  </div>
</template>

<script>
import JointPaper from '@/components/JointPaper';
import LeftPanel from '@/components/LeftPanel';
import ModuleProperties from '@/components/ModuleProperties';

export default {
	name: 'App',

	components: {
		JointPaper,
		LeftPanel,
		ModuleProperties
	},

	data() {
		return {
			background: {
				color: 'antiquewhite'
			},
			gridSize: 10,
			drawGrid: {
				name: 'mesh'
			}
		};
	},

	methods: {
		setupGraph(graph) {
			const rect = new this.$joint.shapes.standard.Rectangle();
			rect.position(100, 30);
			rect.resize(100, 40);
			rect.attr({
				body: {
					fill: 'blue'
				},
				label: {
					text: 'Hello',
					fill: 'white'
				}
			});
			rect.addTo(graph);

			const rect2 = rect.clone();
			rect2.translate(300, 0);
			rect2.attr('label/text', 'World!');
			rect2.addTo(graph);

			const link = new this.$joint.shapes.standard.Link();
			link.source(rect);
			link.target(rect2);
			link.addTo(graph);
		}
	}
};
</script>

<style src="./styles.css">
</style>
