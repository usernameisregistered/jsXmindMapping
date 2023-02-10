import { NODE_DIRECTION } from "../common/constants";
import { guid } from "../util/util";

export default class Node {
    /**
     * 创建一个节点
     * @param { Number } index 当前节点的索引
     * @param { Node|null } parent 当前节点的父节点 
     * @param { String } title 当前节点的标题 
     * @param { Boolean } expanded 当前节点是否展开
     * @param { NODE_DIRECTION } direction 当前节点的方向
     */
    constructor(index, parent = null, title, expanded = true, direction = NODE_DIRECTION.RIGHT) {
        this.key = guid('node_');
        this.parent = parent;
        this.title = title;
        this.data = {};
        this.expanded = expanded;
        this.direction = direction;
        this.children = [];
    }

    /**
     * 添加子节点
     * @param {Node} node 
     */
    addChildren(node) {
        node.parent = this;
        node.direction = this.direction;
        this.children.push(node);
    }

    /**
     * 在某个节点插入节点
     * @param {Node} node 
     * @param {Node} direction 
     */
    insertChildNode(node, direction) {
        const index = this.children.findIndex(el => el.key === node.key);
        if (direction === "after") {
            this.children.splice(index + 1, 0, node)
        } else {
            this.children.splice(index, 0, node)
        }
    }
}