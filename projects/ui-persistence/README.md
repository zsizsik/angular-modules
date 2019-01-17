# UI Persistence

Provides a declarative way to save and restore component properties of your Angular application or module.

## Usage

Let us say you have a component 'AComp' having a property 'aProp' and you want to save its value when it changes
and want it to restore when you reload the application.



In your template you are using this property, so you have something like:

```
...
<some-tag [value]="aProp" (event)="handlerThatModifiesTheProp($event)"></some-tag>
...
```

All you have to do is add following element in the template:
```
<ui-persist [what]="aProp" [key]="'someUniqueKey'" (onLoad)="aProp = $event"></ui-persist>
```    
The position of the element does no matter. I put it on the end of the tamplate usually.

The value of someUniqueKey should could me made up of the schema:
```
<application_name>.[<module_name>].<component_name>.<property_name>
```

## Github

https://github.com/zsizsik/angular-modules