import Arsenal from "./Arsenal";
import Source from "./SourceBlock/Source";
import './BlackBlock.scss'

function BlackBlock() {
   return (
      <div className="black_block">
         <div className="container">
            <div className="black_block_wrap">
               <Source />
               <Arsenal />
            </div>
         </div>
      </div>
   );
}

export default BlackBlock;