import request from '@/plugins/request';

// 查询类别
export function getCategories (data) {
    let url = '/cms/api/article/zendesk/categories/' + data;
    return request({
        url: url,
        method: 'GET'
    })
}

// 查询组别
export function getSections (data) {
    let url = '/cms/api/article/zendesk/sections';
    return request({
        url: url,
        method: 'GET',
        params: data
    })
}

// 查询类别下文章
export function getZendeskArticles (data) {
    let url = '/cms/api/article/zendesk/articles';
    return request({
        url: url,
        method: 'GET',
        params: data
    })
}

// 查询组别下的文章
export function getSectionArticles (data) {
    let url = '/cms/api/article/zendesk/sections/articles';
    return request({
        url: url,
        method: 'GET',
        params: data
    })
}

// 查询公告
export function getNotices () {
    let url = '/cms/api/article/notice';
    return request({
        url: url,
        method: 'GET'
    })
}

// 查询公告详情
export function getNoticeDetail (data) {
    let url = '/cms/api/article/detail/' + data;
    return request({
        url: url,
        method: 'GET'
    })
}

// 查询公告
export function getArticles (data) {
    let url = '/cms/api/article/articles';
    return request({
        url: url,
        method: 'GET',
        params: data
    })
}

// 查询热门咨询
export function getHotArticles (data) {
    let url = '/cms/api/article/hotArticles';
    return request({
        url: url,
        method: 'GET',
        params: data
    })
}
