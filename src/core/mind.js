import { version } from "../../package.json"
import Logger from "../common/logger";
export default class Mind {
    constructor() {
        this.name = this.name;
        this.auther = auther;
        this.version = version;
        this.root = null;
        this.selectNode = null;
        this.nodes = {};
        this.nodeKeys = [];
    }

    /**
     * 添加节点
     * @param {Node} node 
     * @param {Node} parentNode 
     * @returns 
     */
    addNode(node, parentNode) {
        if (this.includeNode(node)) {
            Logger.debug(`要添加节点已经存在, ${node.toString()}`)
            return;
        }
        if (parentNode) {
            if (!this.includeNode(parentNode)) {
                Logger.debug(`引用的父节点不存在, ${parentNode.toString()}`)
                return;
            } else {
                parentNode.addChildren(node);
                this.nodes[node.key] = node;
                this.nodeKeys.push(node.key);
            }
        } else {
            if (!this.root) {
                this.root = node;
                this.nodeKeys.push(node.key);
                this.nodes[node.key] = node;
            } else {
                Logger.debug(`根节点已经存在，要添加的父节点不存在，无法添加`)
            }
        }
    }

    /**
     * 是否包含某个节点
     * @param {Node} node 
     * @returns {Boolean}
     */
    includeNode(node) {
        return !!this.nodeKeys.includes(node.key);
    }

    /**
     * 在某个节点之前插入节点
     * @param {Node} beforeNode 
     * @param {Node} node 
     */
    insertNodeBefore(beforeNode, node) {
        this._insertNode(beforeNode, node, "before")
    }

    /**
     * 在某个节点之后插入节点
     * @param {Node} beforeNode 
     * @param {Node} node 
     */
    insertNodeAfter(beforeNode, node) {
        this._insertNode(beforeNode, node, "after")
    }

    /**
     * 插入节点
     * @private
     * @param {*} beforeNode 
     * @param {*} node 
     * @param {*} direction 
     */
    _insertNode(beforeNode, node, direction) {
        if (this.includeNode(node)) {
            Logger.debug(`要添加节点已经存在, ${node.toString()}`)
            return;
        }
        if (beforeNode && !this.includeNode(beforeNode)) {
            Logger.debug(`引用的节点不存在, ${node.toString()}`)
            return;
        }
        if (beforeNode.key === this.root.key) {
            Logger.debug(`根节点不能添加同级节点, ${node.toString()}`)
            return;
        }
        beforeNode.parentNode.insertChildNode(node, direction);
        this.nodeKeys.push(node.key);
        this.nodes[node.key] = node;
    }

    /**
     * 删除节点
     * @param {Node} node 
     * @param {Boolean} recursion 是否递归删除，即支持字节点的删除
     */
    removeNode(node, recursion = false){
        if (!this.includeNode(node)) {
            Logger.debug(`要删除节点不存在, ${node.toString()}`)
            return;
        }
        if(recursion){
            this._removeNode(node, true)
        } else {
            if(node.children.length === 0){
                if(this.root.key === node.key){
                    if(this.nodeKeys.length === 1){
                        this.root = null;
                        this.nodes = {};
                        this.nodeKeys = [];
                        Logger.info(`删除根节点`)
                    } else {
                        this._removeNode(node, false)
                    }
                } 
            } else {
                Logger.debug(`无法删除含有子节点的节点, ${node.toString()}`)
            }
        }
    }

    /**
     * 删除节点
     * @private
     * @param {Node} node 
     * @param {Boolean} recursion 是否递归删除，即支持字节点的删除
     */
    _removeNode(node, recursion){

    }
}