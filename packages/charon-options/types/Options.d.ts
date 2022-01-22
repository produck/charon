interface BaseAccessor {}

interface AccessorConstructor<
	Descriptor extends BaseDescriptor = {},
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = {},
> {
	new <
		Context = any
	>(
		raw: object,
		context: Context
	): MixinedAccessor<Context, Descriptor, ChildrenAccessorConstructorMap>;

	Raw(): object;

	merge(
		accessor: MixinedAccessor<any, Descriptor, ChildrenAccessorConstructorMap>,
		options: object
	): void;
}

interface PropertyDescriptorObject<
	Context = any,
	Value = any,
> {
	value?: Value;
	set?(newValue?: Value, oldValue?: Value, context?: Context): void;
	validate?(value?: Value, context?: Context): boolean;
}

type PropertyDescriptor<T extends object> = T extends object
	? PropertyDescriptorObject<any, number>
	: number | boolean | string;

interface AccessorConstructorMap {
	[key: string]: AccessorConstructor;
}

interface BaseDescriptor {
	[key: string]: PropertyDescriptor<any>;
}

type MixinedAccessor<
	Context = any,
	Descriptor extends BaseDescriptor = BaseDescriptor,
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = AccessorConstructorMap
> = BaseAccessor & {
	[SelfProperty in keyof Descriptor]:
		Descriptor[SelfProperty] extends PropertyDescriptorObject<Context, infer R>
			? R : Descriptor[SelfProperty]
} & {
	[ChildProperty in keyof ChildrenAccessorConstructorMap]: boolean;
}

export function define<
	CustomDescriptor extends BaseDescriptor = BaseDescriptor,
	ChildrenAccessorConstructorMap extends AccessorConstructorMap = AccessorConstructorMap
>(
	constructor: any,
	descriptor: CustomDescriptor,
	children: ChildrenAccessorConstructorMap
): AccessorConstructor<CustomDescriptor, ChildrenAccessorConstructorMap>;