import ElementType from "../helpers/types/elementType";

export default class TypeClass {
  constructor(public element: ElementType) {}

  getElementType() {
    return this.element.name;
  }
}
