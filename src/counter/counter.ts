import { Component, Prop, Vue } from 'vue-property-decorator';
import WithRender from "./counter.html";

import clear from '@/counter/child/clear';

@WithRender
@Component({
    components: {clear}
})
export default class counter extends Vue {
    public textFieldText: string = "hello";
    public counter: number = 0;

    public fieldRule = [(v: string) => v !== "-1" || "We can not go below 0"]

    public add() {
        this.counter = this.counter + 1;
        this.textFieldText = this.counter.toString();
    }

    public subtract() {
        this.counter = this.counter - 1;
        this.textFieldText = this.counter.toString();        
    }

    public clear(message: string) {
        this.textFieldText = message;
    }
}