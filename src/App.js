import React, { Component } from 'react';
import ReactZtree from './ztree-react';
const nodes1= [
  {
      'id': '1',
      'name': '所有企业',
      'open': true,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '0'
  },
  {
      'id': '-2',
      'name': '散客',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '-3',
      'name': '散合同',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '2_1809051415511000_',
      'name': 'zjc',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '3_1809051415511000_001',
      'name': 'aaaaaa',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1809051415511000_'
  },
  {
      'id': '3_1809051415511000_002',
      'name': 'bbbbb',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1809051415511000_'
  },
  {
      'id': '3_1809051415511000_001001',
      'name': '123',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '3_1809051415511000_001'
  },
  {
      'id': '3_1809051415511000_002001',
      'name': '222',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '3_1809051415511000_002'
  },
  {
      'id': '3_1809051415511000_002002',
      'name': '111',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '3_1809051415511000_002'
  },
  {
      'id': '3_1809051415511000_002001001',
      'name': '2222',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '3_1809051415511000_002001'
  },
  {
      'id': '3_1809051415511000_001001001',
      'name': 'a333',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '3_1809051415511000_001001'
  },
  {
      'id': '2_1809011847421000_',
      'name': '压测企业3',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '3_1809011847421000_004',
      'name': '不不不',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1809011847421000_'
  },
  {
      'id': '3_1809011847421000_001',
      'name': '啊是',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1809011847421000_'
  },
  {
      'id': '3_1809011847421000_003',
      'name': '1223',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1809011847421000_'
  },
  {
      'id': '3_1809011847421000_002',
      'name': 'aaa',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1809011847421000_'
  },
  {
      'id': '3_1809011847421000_001001',
      'name': '吧人',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '3_1809011847421000_001'
  },
  {
      'id': '2_1808311744121000_',
      'name': '压测企业2',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '2_1808301615211000_',
      'name': '测试权限',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '2_1808291409311000_',
      'name': '压测企业',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '2_1808281758331000_',
      'name': '体能报告导入企业2',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '3_1808281758331000_001',
      'name': '测试1',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1808281758331000_'
  },
  {
      'id': '3_1808281758331000_002',
      'name': '测试3',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1808281758331000_'
  },
  {
      'id': '3_1808281758331000_003',
      'name': '测试4',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1808281758331000_'
  },
  {
      'id': '3_1808281758331000_001001',
      'name': '测试2',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '3_1808281758331000_001'
  },
  {
      'id': '2_1808241618531000_',
      'name': '测试企业',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '2_1808241401511000_',
      'name': '测试权限',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '1'
  },
  {
      'id': '3_1808241401511000_001',
      'name': '一级组织',
      'open': false,
      'flag': true,
      'checked': false,
      'chkDisabled': false,
      'pId': '2_1808241401511000_'
  }
];
const check={
  enable:false
}
const data = {
  simpleData : {
    enable : true
  }
}
const view = {
  dblClickExpand : false,
  showLine : false,
  showIcon : showIconForTree,
  expandSpeed: 'slow'
}
function showIconForTree(treeId, treeNode) {
	return !treeNode.isParent;
};
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showTree:true,
      nodes:''
    }
  }
  render() {
    return (
      <div>
          {this.state.nodes?
            <ReactZtree nodes={this.state.nodes} events={this.getEvents()} check={check} view={view} data={data}  ref="ztree"/>
          :null}
      </div>
    );
  }
  getEvents(){
    return {
      'onClick':(event,treeId,treeNode)=>{this.handleClick(event,treeId,treeNode)},
      'onCheck':(event,treeId,treeNode)=>{this.handleClick(event,treeId,treeNode)}
    }
  }
  handleClick(event,treeId,treeNode){
    this.setState({
        shop: '12121'
    })
    // console.log(treeNode);
    // console.log(this.refs.ztree.ztreeObj.getCheckedNodes());
  }
  handleCheck(event,treeId,treeNode){
    console.log(treeNode);
  }
  componentDidMount() {
    this.getTreeDate(); 
  }
  getTreeDate() {
    this.setState({
        nodes:nodes1,
    },function(){
        console.log(this.state)
    });
  }
}
