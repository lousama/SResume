<template>
<div class="resume" :class="config.style | styleFilter">
    <header>
        <div class="main_info">
            <h1 class="name">{{ resume.name }}</h1>
            <h2 class="intension">{{ resume.intension }}</h2>
        </div>
        <ul class="other_basic_info">
            <li>{{ resume.basicInfo.phone }}</li>
            <li>{{ resume.basicInfo.email }}</li>
            <li class="header_link" v-for="( url, key ) in resume.basicInfo.links">
                <a :href="url"> {{ key }}</a>
            </li>
        </ul>
    </header>

    <div class="first_section">
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

                    <ul>
                        <li v-for="item in resume.education.awards">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </section>

        <section class="skills">
            <div class="section_title">
                <h1 class="zh_title">技能</h1>
                <h2 class="en_title">Skills</h2>
            </div>

            <div v-for="item in resume.skills" class="item">
                <div class="item_content">
                    <h1>{{ item.title }}</h1>
                    <ul>
                        <li v-for="detail in item.details"
                        v-html="textModify(detail)">
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

    <div class="second_section">
        <section class="experience">
            <div class="section_title">
                <h1 class="zh_title">实习/项目经验</h1>
                <h2 class="en_title">Experience</h2>
            </div>

            <div v-for="item in resume.experience" class="item">
                <div class="item_duration">{{ item.duration }}</div>
                <div class="item_content">
                    <h1>
                        {{ item.title }} | 
                        <span class="annotation">{{ item.role }}</span>
                    </h1>
                    <h2 v-html="item.description"></h2>
                    <ul>
                        <li v-for="detail in item.details"
                        v-html="textModify(detail)">
                        </li>
                    </ul>
                    <div class="display">
                        <a  :href="item.source">source</a>
                        <a :href="item.demo">demo</a>
                    </div>
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
                        <p v-if="resume.language.cet4">
                        CET4 {{ resume.language.cet4 | cetFilter }}
                        </p>
                        <p v-if="resume.language.cet6">
                        CET6 {{ resume.language.cet6 | cetFilter }}
                        </p>
                    </div>
                </div>

                <div class="item_content">
                    <ul>
                        <li v-for="item in resume.language.details"
                        v-html="addSpace(item)">
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        <section v-if="resume.selfe.show" class="selfe">
            <div class="section_title">
                <h1 class="zh_title">自我评价</h1>
                <h2 class="en_title">Self-evaluation</h2>
            </div>

            <div class="item">
                <div class="item_content">
                    <ul>
                        <li v-for="item in resume.selfe.content">
                        {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<style lang="less">
@import "../../style/entry.less";
</style>

<script>
import resume from '../../config/resume.config.js'
import keywords from '../../config/keywords.js'
import config from '../../config/app.config.js'

export default {
    data () {
        return {
            resume : resume,
            config : config,
        };
    },

    created () {
        keywords.sort( function( a, b ) {
            return b.length - a.length;
        } );
    },

    methods : {
        textModify ( text ) {
            text = this.addSpace( text );
            
            if ( this.config.highlight ) {
                text = this.highlight( text );
            }
            return text;
        },
        addSpace ( text ) {
            text = text.replace( /\w+/g, " $& " )
            return text;
        },
        highlight ( text ) {
            // 复杂度偏高
            keywords.forEach( function( word ) {
                text = text.replace( word, '<span class="keyword">' + word + '</span>' );
            } );
            return text;
        },
    },

    filters : {
        cetFilter ( e ) {
            return typeof e == 'boolean' ? '' : e;
        },
        styleFilter ( e ) {
            return e ? e : 'default';
        }
    },
}
</script>
