import React,{Component} from 'react';
import $ from 'jquery';
import 'ztree';
let ztreeIndex=0;
let _ztree = (window||global).ztree = {};
export default class ReactZtree extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.renderZtreeDom();
  }
  //ztree-for-react增加了这个生命周期，使得每次父节点的state变更都会重置ztree。取消就好了
  // componentDidUpdate(){
  //   this.renderZtreeDom();
  // }
  componentWillUnmount(){
    this.ztreeObj && this.ztreeObj.destroy();
  }
  renderZtreeDom(){
    let ztreeObj = this.ztreeObj=$.fn.zTree.init(this.getTreeDom(),this.getTreeSetting(),this.props.nodes);
    if(this.props.treeName && typeof this.props.treeName ==='string'){
      _ztree[this.props.treeName] = ztreeObj;
    }
    return ztreeObj;
  }
  getTreeDom(){
    return $(this.refs.ztree);
  }
  getTreeSetting(){
    let props=this.props;
    return {
      treeId:props.treeId,
      treeObj:props.treeObj,
      async:props.async,
      callback:props.events,
      check:props.check,
      data:props.data,
      edit:props.edit,
      view:props.view
    }
  }
  getTreeObj(){
    return this.ztreeObj;
  }
  render(){
    return (
      <div className="ztree" ref="ztree" id={`ztree_${ztreeIndex++}`}>

      </div>
    )
  }
}
