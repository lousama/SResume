<template>
<div class="resume">
    <header>
        <div class="main_info">
            <h1 class="name">{{ resume.name }}</h1>
            <h2 class="intension">{{ resume.intension }}</h2>
        </div>
        <ul class="other_basic_info">
            <li>{{ resume.basicInfo.phone }}</li>
            <li>{{ resume.basicInfo.email }}</li>
            <li><a :href="resume.basicInfo.github">Github</a></li>
        </ul>
    </header>

    <div class="left_section">
        <section class="education">
            <div class="section_title">
                <h1 class="zh_title">教育经历</h1>
                <h2 class="en_title">Education</h2>
            </div>

            <div class="item">
                <div class="item_duration">{{ resume.education.duration }}</div>
                <div class="item_content">
                    <h1 class="school">
                        {{ resume.education.school }}
                        <span class="annotation">{{ resume.education.degree }}</span>
                    </h1>
                    <h2 class="major">{{ resume.education.major }}</h2>
                    <h3 class="ranking">{{ resume.education.ranking }}</h3>
                </div>
            </div>
        </section>

        <section class="language">
            <div class="section_title">
                <h1 class="zh_title">语言水平</h1>
                <h2 class="en_title">Language</h2>
            </div>
            
            <div class="item">
                <div class="item_duration">
                    <div class="cet">
                        CET6 {{ resume.language.cet6 }}
                    </div>
                </div>

                <div class="item_content">
                    <ul>
                        <li v-for="item in resume.language.details">
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="experience">
            <div class="section_title">
                <h1 class="zh_title">项目经验</h1>
                <h2 class="en_title">Experience</h2>
            </div>

            <div v-for="item in resume.experience" class="item">
                <div class="item_duration">{{ item.duration }}</div>
                <div class="item_content">
                    <h1>{{ item.title }}</h1>
                </div>
            </div>
        </section>
    </div>

    <div class="right_section">
    </div>


</div>
</template>

<style lang="less" scoped>
@import "./style.less";
</style>

<script>
import resume from '../../resume.config.js'

export default {
    data () {
        return {
            resume : resume
        };
    }
}
</script>
