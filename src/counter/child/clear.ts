import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from "./clear.html";

@WithRender
@Component
export default class clear extends Vue {
    public clear() {
        this.$emit("clearField", "childComponent")
    }
}