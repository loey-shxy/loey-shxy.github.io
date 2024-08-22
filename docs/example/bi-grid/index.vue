<template>
	<div>
		<BIGird :data="data" :get-component="getComponent" :show-menu="true"></BIGird>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from '@vue/runtime-core';
import { ref, defineAsyncComponent } from 'vue';
import {
	useTokenStore,
	useUserStore,
	useOrgStore,
	useScreenStore,
	usePathStore,
	useTenantStore,
	useScreenTreeStore,
	useUserRoleStore,
	Session,
	BIGird,
	getCurrentScreen,
	BILoading,
	NextLoading,
} from '../../../packages/index';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const tokenStore = useTokenStore();
const userRoleStore = useUserRoleStore();
const orgStore = useOrgStore();
const screenStore = useScreenStore();
const pathStore = usePathStore();
const tenantStore = useTenantStore();
const screenTreeStore = useScreenTreeStore();


if (!useUserStore().id) {
	// window.location.replace('/login');
}
const data: any = ref({});
getCurrentScreen().then((res) => {
	data.value = res;
});

let index = 0
const getComponent = (component: any) => {
	try {
		const modules = import.meta.glob('./**/**/**.vue');
		const errorFn = () => Promise.resolve();
		index += 1
		return defineAsyncComponent({
			loader: modules[/* @vite-ignore */ `./${component.path}.vue`] || errorFn,
			loadingComponent: BILoading,
			delay: index * 150
		});
	} catch (error) {
		console.log('组件加载错误信息', error);
		return '';
	}
};

onMounted(() => {
	NextLoading.done();
});

const resizeFun = (): void => {
	const docEle = document.documentElement;
	const resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	const resizeFun = () => {
		const { clientHeight } = docEle;
		if (!clientHeight) return;
		docEle.style.fontSize = `${100 * (clientHeight / 1080)}px`;
	};
	if (!document.addEventListener) return;
	window.addEventListener(resizeEvt, resizeFun, false);
	window.addEventListener('DOMContentLoaded', resizeFun, false);
	resizeFun();
};
resizeFun();
</script>
