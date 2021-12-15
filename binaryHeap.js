class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentidx = Math.floor((idx - 1/2));
            let parent = this.values[parentidx];
            if(element <= parent) break;
            if(element > parent){
                this.values[parentidx] = element;
                this.values[idx] = parent;
                idx = parentidx;
            }
        }
    }
}