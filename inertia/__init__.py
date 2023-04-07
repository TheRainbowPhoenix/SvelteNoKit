"""
Fast-Inertia
-------------

Inertiajs Adapter for FastAPI. Inspired from Django Inertia.
"""

from .inertia import InertiaMiddleware, InertiaResponse

__all__ = ["InertiaMiddleware", "InertiaResponse"]
