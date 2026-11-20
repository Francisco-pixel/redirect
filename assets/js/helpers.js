export function createTag(element='div', options={}){
   const tag=document.createElement(element);
   Object.assign(tag,options)
   return tag;
}