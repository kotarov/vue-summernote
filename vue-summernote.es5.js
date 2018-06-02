const SummernoteComponent = {
	template:'<div><textarea :id="id" :value="value" @change="onChange"></textarea></div>',
	props:["value","autofocus","placeholder"],
	data(){return{
		height: 'auto',
		minHeight: false
	}},
	watch:{
		value(val){ 
			if(this.summernote.summernote('code') !== val) {
				//this.summernote.summernote("editor.rewind")
				this.summernote.summernote('code',val)
			} 
		}
	},
	computed:{
		id(){ return "sn_"+Date.now() }
	},
	beforeDestroy(){
		$("#"+this.id).summernote("destroy")
	},
	mounted(){
		this.summernote = $("#"+this.id).summernote({
			height:"auto",minHeight:"200px",
			focus:typeof this.autofocus !== 'undefined', 
			placeholder:this.placeholder,
			popover:{
				image:[
					['imagesize', ['imageSize100', 'imageSize50', 'imageSize25']],
					['float', ['floatLeft', 'floatRight', 'floatNone']],
					['remove', ['removeMedia']]
				]
			}
		})
		this.summernote.on('summernote.change', this.onChange)
		$("#"+this.id).next().find(".note-toolbar").find("[data-toggle=dropdown]").attr('onclick','$(this).next().toggle()')
			.next().attr('onclick','$(this).toggle()')
	},
	methods:{
		onChange(we){
			this.$emit('input', we.target.value)
		}
	}
}

Vue.component("summernote",SummernoteComponent)
