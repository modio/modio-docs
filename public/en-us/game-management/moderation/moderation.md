---
id: moderation
title: Moderation
slug: /moderation
sidebar_position: 0
---

# Moderation

mod.io offers four levels of moderation:
1. Automated scanning done by mod.io
2. Rules Engine moderation
3. UGC curation
4. Community reports of inappropriate or illegal content

These moderation tools work together to ensure the quality of UGC submitted for your game remains high.

![mod.io moderation](images/moderation.png)

## Automated moderation

Every UGC submitted to mod.io is first passed through our automated moderation. This consists of mod.io validation rules as well as platform validation rules. Depending on the validation rule applied, UGC may either be passed, censored, rejected or flagged for manual review.

mod.io validation rules involve:
* virus and malware scanning
* file type and field validation
* rate limit check

Platform validation rules typically cover profanity filters and 18+ content checks to protect minors from inappropriate content. mod.io runs these checks to ensure compliance with rules set down from platform owners.

## Rules Engine

The Rules Engine is a premium feature that runs all UGC through a series of checks defined by you. For example, you can flag UGC from users with a history of stolen content, UGC with particular words in the title, particular file types detected inside the zip file, and many more options. The Rules Engine also allows you to define the action taken for each failed check. For example, to reject the UGC, flag it for manual moderation or call a webhook for custom actions.

The Rules Engine is very powerful, so view its [dedicated documentation](/moderation/rules-engine) for a full overview.

## Curation

Games can define settings such as how mature content will be handled, whether comments will be allowed, whether UGC will be hidden once it has received a certain number of player reports and whether UGC requires manual approval before going live. Curation settings are applied to UGC after automated validation and Rules Engine moderation.

## Community reports

mod.io provides a moderation dashboard that lets game teams review UGC. Content may appear on this dashboard through one of three reasons:

1. The content fails an automated validation rule that requires manual approval (usually a custom Rules Engine rule)
2. You have specified that you wish to curate UGC, instead of having it be automatically approved
3. A player has reported the content for a reason such as stolen content, illegal content or a DMCA issue

Team members given the ‘Moderator’ level permission or above may action reports that appear here. Moderators may approve, delete, or edit the UGC as appropriate. Moderators may also apply restrictions to users, for example, those who have repeatedly uploaded inappropriate content.