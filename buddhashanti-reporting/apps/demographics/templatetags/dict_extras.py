from django import template

register = template.Library()


@register.filter
def dict_get(d, k):
    if d is None:
        return None
    return d.get(k)
