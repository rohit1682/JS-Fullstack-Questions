// let abc = {
//     length: 2,
//     meth: function(){
//         console.log(this.length);
//         function inx(){
//             console.log(this.length);
//         }
//         inx();
//     }
// }

let abc = {
    length: 2,
    meth: function () {
        console.log(this.length); 
        let self = this; 

        function inx() {
            console.log(self.length); 
        }
        inx();
    }
};

abc.meth();
 