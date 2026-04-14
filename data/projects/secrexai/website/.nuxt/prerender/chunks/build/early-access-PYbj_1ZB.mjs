import { H as Head } from './components-7B7l7irn.mjs';
import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, ref, reactive, withCtx, createVNode, unref, createTextVNode, useSSRContext } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseContain } from 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue/server-renderer/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/h3/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ufo/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/destr/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/hookable/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unstorage/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/ohash/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/klona/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/defu/dist/defu.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/scule/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unctx/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/pathe/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/@iconify/utils/lib/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/consola/dist/index.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/tailwindcss/dist/colors.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/@iconify/vue/dist/iconify.mjs';
import '../_/renderer.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unhead/dist/server.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/devalue/index.js';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unhead/dist/utils.mjs';
import 'file:///home/openclaw/.openclaw/workspace/data/projects/personai/website/node_modules/unhead/dist/plugins.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "early-access",
  __ssrInlineRender: true,
  setup(__props) {
    const submitted = ref(false);
    const emailError = ref("");
    const form = reactive({
      name: "",
      email: "",
      whatsapp: "",
      company: "",
      needs: [],
      other: "",
      agreed: false
    });
    const benefits = [
      { id: 1, emoji: "\u{1F381}", title: "\u6708\u8CBB\u9001 AI \u6559\u7DF4", desc: "\u6708\u4ED8\u65B9\u6848\u9996\u6708\u514D\u8CBB\u9001 HK$1,500 AI \u6559\u7DF4\u670D\u52D9" },
      { id: 2, emoji: "\u{1F4B0}", title: "\u65E9\u9CE5\u6298\u6263", desc: "\u9396\u5B9A\u65E9\u9CE5\u50F9\uFF0C\u6B63\u5F0F\u4E0A\u7DDA\u5F8C\u6F32\u50F9\u5514\u5F71\u97FF\u4F60" },
      { id: 3, emoji: "\u26A1", title: "\u512A\u5148\u9AD4\u9A57", desc: "\u6BD4\u666E\u901A\u7528\u6236\u512A\u5148\u4F7F\u7528\u65B0\u529F\u80FD\uFF0C\u6BD4\u5176\u4ED6\u5C0D\u624B\u5FEB\u4E00\u6B65" }
    ];
    const aiOptions = [
      { id: "content", emoji: "\u270D\uFE0F", label: "\u5E6B\u6211\u5BEB\u6587\u6848 / \u5167\u5BB9" },
      { id: "search", emoji: "\u{1F50D}", label: "\u641C\u5C0B\u8CC7\u6599 / \u6574\u7406\u8CC7\u8A0A" },
      { id: "translate", emoji: "\u{1F310}", label: "\u7FFB\u8B6F\u6587\u4EF6 / Email" },
      { id: "reminder", emoji: "\u23F0", label: "\u6392\u7A0B\u63D0\u9192 / \u4EFB\u52D9\u7BA1\u7406" },
      { id: "report", emoji: "\u{1F4CA}", label: "\u751F\u6210\u5831\u544A / \u5206\u6790\u6578\u64DA" },
      { id: "client", emoji: "\u{1F4AC}", label: "\u5BA2\u6236\u6E9D\u901A / \u56DE\u8986\u7BC4\u672C" },
      { id: "social", emoji: "\u{1F4F1}", label: "Social Media \u7BA1\u7406" },
      { id: "document", emoji: "\u{1F4C4}", label: "\u6587\u4EF6\u8655\u7406 / \u5408\u540C\u8349\u64EC" },
      { id: "research", emoji: "\u{1F575}\uFE0F", label: "\u7AF6\u54C1\u7814\u7A76 / \u5E02\u5834\u5206\u6790" },
      { id: "training", emoji: "\u{1F393}", label: "\u54E1\u5DE5\u57F9\u8A13 / \u77E5\u8B58\u5EAB" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = Head;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>\u512A\u5148\u767B\u8A18 Early Access | PersonAI \u2014 \u9999\u6E2F WhatsApp AI \u52A9\u624B</title><meta name="description" content="PersonAI \u512A\u5148\u767B\u8A18\uFF01\u540D\u984D\u6709\u9650\uFF0C\u6436\u5148\u9AD4\u9A57\u9999\u6E2F SME \u5C08\u5C6C WhatsApp AI \u52A9\u624B\u3002"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "\u512A\u5148\u767B\u8A18 Early Access | PersonAI \u2014 \u9999\u6E2F WhatsApp AI \u52A9\u624B"),
              createVNode("meta", {
                name: "description",
                content: "PersonAI \u512A\u5148\u767B\u8A18\uFF01\u540D\u984D\u6709\u9650\uFF0C\u6436\u5148\u9AD4\u9A57\u9999\u6E2F SME \u5C08\u5C6C WhatsApp AI \u52A9\u624B\u3002"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-gradient-to-br from-blue-600 to-blue-800 py-16 text-white"><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><div class="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6"> \u{1F525} \u9650\u6642\u512A\u5148\u767B\u8A18 </div><h1 class="text-4xl md:text-5xl font-black mb-4">\u6436\u5148\u9AD4\u9A57 PersonAI</h1><p class="text-blue-200 text-xl mb-8">\u9996\u6279 50 \u500B\u540D\u984D\uFF0C\u5168\u90E8\u5305\u542B\u65E9\u9CE5\u512A\u60E0\u540C AI \u6559\u7DF4\u670D\u52D9</p><div class="max-w-md mx-auto"><div class="flex justify-between text-sm mb-2"><span class="text-blue-200">\u5DF2\u767B\u8A18 12 \u4F4D</span><span class="text-blue-200">\u5269\u9918 38 \u500B\u540D\u984D</span></div><div class="bg-white/20 rounded-full h-4 overflow-hidden"><div class="bg-green-400 h-4 rounded-full transition-all" style="${ssrRenderStyle({ "width": "24%" })}"></div></div><div class="text-center mt-2 text-sm text-blue-200">12 / 50 \u540D\u984D\u5DF2\u4F7F\u7528</div></div></div></section><section class="section-blue py-12"><div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-2xl font-black text-gray-900 text-center mb-8">\u65E9\u9CE5\u7528\u6236\u7368\u5BB6\u512A\u60E0</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><!--[-->`);
      ssrRenderList(benefits, (benefit) => {
        _push(`<div class="bg-white rounded-2xl p-6 shadow-sm text-center border border-blue-100"><div class="text-3xl mb-3">${ssrInterpolate(benefit.emoji)}</div><h3 class="font-bold text-gray-900 mb-2">${ssrInterpolate(benefit.title)}</h3><p class="text-gray-600 text-sm">${ssrInterpolate(benefit.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="section-white py-16"><div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">`);
      if (!unref(submitted)) {
        _push(`<div><div class="text-center mb-8"><h2 class="text-3xl font-black text-gray-900 mb-2">\u7ACB\u5373\u767B\u8A18</h2><p class="text-gray-500">\u586B\u59A5\u8CC7\u6599\u5F8C\uFF0C1-3 \u500B\u5DE5\u4F5C\u5929\u5167\u6211\u54CB\u6703 WhatsApp \u806F\u7D61\u4F60</p></div><form class="space-y-5"><div><label class="block font-semibold text-gray-700 mb-2">\u59D3\u540D <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" required placeholder="\u9673\u5927\u6587" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></div><div><label class="block font-semibold text-gray-700 mb-2">\u516C\u53F8\u96FB\u90F5 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).email)} type="email" required placeholder="yourname@company.com" class="${ssrRenderClass([unref(emailError) ? "border-red-400 focus:ring-red-400" : "", "w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"])}">`);
        if (unref(emailError)) {
          _push(`<p class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(emailError))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-gray-400 text-xs mt-1">\u26A0\uFE0F \u8ACB\u4F7F\u7528\u516C\u53F8\u96FB\u90F5\uFF08\u4E0D\u63A5\u53D7 Gmail / Yahoo / Hotmail \u7B49\u514D\u8CBB\u90F5\u7BB1\uFF09</p></div><div><label class="block font-semibold text-gray-700 mb-2">WhatsApp \u865F\u78BC <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).whatsapp)} type="tel" required placeholder="+852 9XXX XXXX" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></div><div><label class="block font-semibold text-gray-700 mb-2">\u516C\u53F8\u540D\u7A31 <span class="text-red-500">*</span></label><input${ssrRenderAttr("value", unref(form).company)} type="text" required placeholder="\u4F60\u7684\u516C\u53F8\u540D\u7A31" class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"></div><div><label class="block font-semibold text-gray-700 mb-3">\u6700\u60F3 AI \u5E6B\u4F60\u505A\u54A9\uFF1F\uFF08\u53EF\u9078\u591A\u9805\uFF09</label><div class="grid grid-cols-1 sm:grid-cols-2 gap-2"><!--[-->`);
        ssrRenderList(aiOptions, (option) => {
          _push(`<label class="flex items-start gap-3 bg-gray-50 rounded-xl px-4 py-3 cursor-pointer hover:bg-blue-50 transition-colors border border-transparent hover:border-blue-200"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).needs) ? ssrLooseContain(unref(form).needs, option.id) : unref(form).needs) ? " checked" : ""}${ssrRenderAttr("value", option.id)} class="mt-0.5 accent-blue-600"><span class="text-gray-700 text-sm">${ssrInterpolate(option.emoji)} ${ssrInterpolate(option.label)}</span></label>`);
        });
        _push(`<!--]--></div></div><div><label class="block font-semibold text-gray-700 mb-2">\u5176\u4ED6\u9700\u6C42\uFF08\u9078\u586B\uFF09</label><textarea rows="3" placeholder="\u544A\u8A34\u6211\u54CB\u4F60\u7684\u7279\u5B9A\u9700\u6C42..." class="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none">${ssrInterpolate(unref(form).other)}</textarea></div><div class="flex items-start gap-3"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(unref(form).agreed) ? ssrLooseContain(unref(form).agreed, null) : unref(form).agreed) ? " checked" : ""} required id="terms" class="mt-0.5 accent-blue-600"><label for="terms" class="text-gray-600 text-sm cursor-pointer"> \u6211\u540C\u610F `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/terms",
          class: "text-blue-600 hover:underline",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u670D\u52D9\u689D\u6B3E`);
            } else {
              return [
                createTextVNode("\u670D\u52D9\u689D\u6B3E")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` \u53CA `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/privacy",
          class: "text-blue-600 hover:underline",
          target: "_blank"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u79C1\u96B1\u653F\u7B56`);
            } else {
              return [
                createTextVNode("\u79C1\u96B1\u653F\u7B56")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`\uFF0C \u4E26\u540C\u610F PersonAI \u4EE5 WhatsApp \u806F\u7D61\u6211\u3002 </label></div><button type="submit"${ssrIncludeBooleanAttr(!unref(form).agreed || !!unref(emailError)) ? " disabled" : ""} class="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"> \u{1F525} \u7ACB\u5373\u63D0\u4EA4\u767B\u8A18 \u2192 </button></form></div>`);
      } else {
        _push(`<div class="text-center py-16"><div class="text-7xl mb-6">\u{1F389}</div><h2 class="text-3xl font-black text-gray-900 mb-4">\u591A\u8B1D\u652F\u6301\uFF01</h2><p class="text-gray-600 text-lg mb-6"> \u4F60\u7684\u767B\u8A18\u5DF2\u6210\u529F\u63D0\u4EA4\u3002<br><strong>1-3 \u500B\u5DE5\u4F5C\u5929</strong>\u5167\uFF0C\u6211\u54CB\u7684\u5718\u968A\u6703\u4EE5 WhatsApp \u806F\u7D61\u4F60\uFF0C<br> \u5B89\u6392 PersonAI \u9AD4\u9A57\u540C\u65E9\u9CE5\u512A\u60E0\u8A73\u60C5\u3002 </p><div class="bg-blue-50 rounded-2xl p-6 inline-block text-left mb-8 border border-blue-100"><h3 class="font-bold text-gray-900 mb-3">\u4E0B\u4E00\u6B65</h3><ul class="space-y-2 text-gray-700 text-sm"><li class="flex items-center gap-2">\u2705 \u7559\u610F WhatsApp \u8A0A\u606F\uFF08\u4F86\u81EA +852 9645 6787\uFF09</li><li class="flex items-center gap-2">\u{1F4CB} \u6E96\u5099\u4F60\u60F3\u89E3\u6C7A\u7684\u696D\u52D9\u75DB\u9EDE\u6E05\u55AE</li><li class="flex items-center gap-2">\u{1F3AF} \u6211\u54CB\u6703\u70BA\u4F60\u5EA6\u8EAB\u5B89\u6392 30 \u5206\u9418 Onboarding</li></ul></div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` \u2190 \u8FD4\u56DE\u9996\u9801 `);
            } else {
              return [
                createTextVNode(" \u2190 \u8FD4\u56DE\u9996\u9801 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/early-access.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=early-access-PYbj_1ZB.mjs.map
