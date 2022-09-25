
import Editor from '../editor/Editor'

export default class ChangeFExtentionContr {
    private editor: Editor

    constructor(editor: Editor) {
        this.editor = editor;
    }

    execute() {
        this.editor.changeFExtention("test.mp4", "changeExt.avi");
    } 
}